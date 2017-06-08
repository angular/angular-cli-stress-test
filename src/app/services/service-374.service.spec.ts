/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service374Service } from './service-374.service';

describe('Service374Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service374Service]
    });
  });

  it('should ...', inject([Service374Service], (service: Service374Service) => {
    expect(service).toBeTruthy();
  }));
});
