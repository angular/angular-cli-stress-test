/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service468Service } from './service-468.service';

describe('Service468Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service468Service]
    });
  });

  it('should ...', inject([Service468Service], (service: Service468Service) => {
    expect(service).toBeTruthy();
  }));
});
