/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service984Service } from './service-984.service';

describe('Service984Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service984Service]
    });
  });

  it('should ...', inject([Service984Service], (service: Service984Service) => {
    expect(service).toBeTruthy();
  }));
});
