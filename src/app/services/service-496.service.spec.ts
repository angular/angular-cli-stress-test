/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service496Service } from './service-496.service';

describe('Service496Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service496Service]
    });
  });

  it('should ...', inject([Service496Service], (service: Service496Service) => {
    expect(service).toBeTruthy();
  }));
});
