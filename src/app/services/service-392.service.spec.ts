/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service392Service } from './service-392.service';

describe('Service392Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service392Service]
    });
  });

  it('should ...', inject([Service392Service], (service: Service392Service) => {
    expect(service).toBeTruthy();
  }));
});
