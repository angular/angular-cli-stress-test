/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service528Service } from './service-528.service';

describe('Service528Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service528Service]
    });
  });

  it('should ...', inject([Service528Service], (service: Service528Service) => {
    expect(service).toBeTruthy();
  }));
});
