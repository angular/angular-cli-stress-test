/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service846Service } from './service-846.service';

describe('Service846Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service846Service]
    });
  });

  it('should ...', inject([Service846Service], (service: Service846Service) => {
    expect(service).toBeTruthy();
  }));
});
