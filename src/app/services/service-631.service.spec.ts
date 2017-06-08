/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service631Service } from './service-631.service';

describe('Service631Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service631Service]
    });
  });

  it('should ...', inject([Service631Service], (service: Service631Service) => {
    expect(service).toBeTruthy();
  }));
});
