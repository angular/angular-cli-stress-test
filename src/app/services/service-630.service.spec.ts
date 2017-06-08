/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service630Service } from './service-630.service';

describe('Service630Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service630Service]
    });
  });

  it('should ...', inject([Service630Service], (service: Service630Service) => {
    expect(service).toBeTruthy();
  }));
});
