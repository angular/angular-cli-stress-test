/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service361Service } from './service-361.service';

describe('Service361Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service361Service]
    });
  });

  it('should ...', inject([Service361Service], (service: Service361Service) => {
    expect(service).toBeTruthy();
  }));
});
