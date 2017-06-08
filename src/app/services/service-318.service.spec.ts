/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service318Service } from './service-318.service';

describe('Service318Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service318Service]
    });
  });

  it('should ...', inject([Service318Service], (service: Service318Service) => {
    expect(service).toBeTruthy();
  }));
});
