/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service112Service } from './service-112.service';

describe('Service112Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service112Service]
    });
  });

  it('should ...', inject([Service112Service], (service: Service112Service) => {
    expect(service).toBeTruthy();
  }));
});
