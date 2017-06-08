/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service847Service } from './service-847.service';

describe('Service847Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service847Service]
    });
  });

  it('should ...', inject([Service847Service], (service: Service847Service) => {
    expect(service).toBeTruthy();
  }));
});
