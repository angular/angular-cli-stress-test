/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service241Service } from './service-241.service';

describe('Service241Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service241Service]
    });
  });

  it('should ...', inject([Service241Service], (service: Service241Service) => {
    expect(service).toBeTruthy();
  }));
});
