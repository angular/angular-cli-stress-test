/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service185Service } from './service-185.service';

describe('Service185Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service185Service]
    });
  });

  it('should ...', inject([Service185Service], (service: Service185Service) => {
    expect(service).toBeTruthy();
  }));
});
