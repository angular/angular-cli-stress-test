/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service962Service } from './service-962.service';

describe('Service962Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service962Service]
    });
  });

  it('should ...', inject([Service962Service], (service: Service962Service) => {
    expect(service).toBeTruthy();
  }));
});
