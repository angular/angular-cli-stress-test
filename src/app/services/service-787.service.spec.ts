/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service787Service } from './service-787.service';

describe('Service787Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service787Service]
    });
  });

  it('should ...', inject([Service787Service], (service: Service787Service) => {
    expect(service).toBeTruthy();
  }));
});
