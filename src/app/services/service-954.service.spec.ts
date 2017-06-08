/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service954Service } from './service-954.service';

describe('Service954Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service954Service]
    });
  });

  it('should ...', inject([Service954Service], (service: Service954Service) => {
    expect(service).toBeTruthy();
  }));
});
