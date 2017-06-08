/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service613Service } from './service-613.service';

describe('Service613Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service613Service]
    });
  });

  it('should ...', inject([Service613Service], (service: Service613Service) => {
    expect(service).toBeTruthy();
  }));
});
