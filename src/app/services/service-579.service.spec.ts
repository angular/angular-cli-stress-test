/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service579Service } from './service-579.service';

describe('Service579Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service579Service]
    });
  });

  it('should ...', inject([Service579Service], (service: Service579Service) => {
    expect(service).toBeTruthy();
  }));
});
