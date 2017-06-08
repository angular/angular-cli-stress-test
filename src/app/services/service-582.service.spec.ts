/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service582Service } from './service-582.service';

describe('Service582Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service582Service]
    });
  });

  it('should ...', inject([Service582Service], (service: Service582Service) => {
    expect(service).toBeTruthy();
  }));
});
