/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service794Service } from './service-794.service';

describe('Service794Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service794Service]
    });
  });

  it('should ...', inject([Service794Service], (service: Service794Service) => {
    expect(service).toBeTruthy();
  }));
});
