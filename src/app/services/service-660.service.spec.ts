/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service660Service } from './service-660.service';

describe('Service660Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service660Service]
    });
  });

  it('should ...', inject([Service660Service], (service: Service660Service) => {
    expect(service).toBeTruthy();
  }));
});
