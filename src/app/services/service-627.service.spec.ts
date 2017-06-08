/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service627Service } from './service-627.service';

describe('Service627Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service627Service]
    });
  });

  it('should ...', inject([Service627Service], (service: Service627Service) => {
    expect(service).toBeTruthy();
  }));
});
