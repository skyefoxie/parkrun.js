/**
 * A class representing the Results of a Freedom Run.
 * 
 * @borrows Parkrun#getEvent as getEvent
 */
class FreedomRunResult {
  constructor(res, core) {
    this._time = res.RunTime;
    this._date = new Date(res.RunDate);
    this._athlete = Number.parseInt(res.AthleteID);
    this._event = Number.parseInt(res.EventNumber);

    this._core = core;

    // Core object is the Parkrun.JS core class.
    // Also note that there is no point in having a getAthlete() function as you can only use this with ClientUser anyway.
  }

  /**
   * Get the event object for the event this took place at.
   *
   * @see Parkrun#getEvent()
   *
   * @returns {Promise<Event>} Array of news posts.
   * @throws {ParkrunNetError} ParkrunJS Networking Error.
   */
  async getEvent() {
    return this._core.getEvent(this.getEventID())
  }

  /**
   *  Get the name of the event that this run took place at.
   * 
   * @returns {String} Event name.
   * @throws {ParkrunNetError} ParkrunJS Networking Error.
   */
  async getEventName() {
    return (await this.getEvent()).getName()
  }

  /**
   * Get the finish time for this run.
   * 
   * @returns {String} Finish time.
   */
  getFinishTime() {
    return this._time;
  }

  /**
   * Get the date of this run as a native Date object.
   * 
   * @returns {Date} Date object.
   */
  getRunDate() {
    return this._date;
  }

  /**
   * Get the Athlete ID of the runner.
   * 
   * @returns {Number} Athlete ID.
   */
  getAthleteID() {
    return this._athlete;
  }

  /**
   * Get the Event ID for this run's location.
   * 
   * @returns {Number} Event ID.
   */
  getEventID() {
    return this._event;
  }
}

module.exports = FreedomRunResult