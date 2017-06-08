/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service287Service } from './service-287.service';

describe('Service287Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service287Service]
    });
  });

  it('should ...', inject([Service287Service], (service: Service287Service) => {
    expect(service).toBeTruthy();
  }));
});
