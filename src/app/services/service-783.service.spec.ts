/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service783Service } from './service-783.service';

describe('Service783Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service783Service]
    });
  });

  it('should ...', inject([Service783Service], (service: Service783Service) => {
    expect(service).toBeTruthy();
  }));
});
