/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service927Service } from './service-927.service';

describe('Service927Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service927Service]
    });
  });

  it('should ...', inject([Service927Service], (service: Service927Service) => {
    expect(service).toBeTruthy();
  }));
});
