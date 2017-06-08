/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service813Service } from './service-813.service';

describe('Service813Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service813Service]
    });
  });

  it('should ...', inject([Service813Service], (service: Service813Service) => {
    expect(service).toBeTruthy();
  }));
});
