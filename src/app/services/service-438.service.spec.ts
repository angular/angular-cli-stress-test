/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service438Service } from './service-438.service';

describe('Service438Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service438Service]
    });
  });

  it('should ...', inject([Service438Service], (service: Service438Service) => {
    expect(service).toBeTruthy();
  }));
});
