/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service687Service } from './service-687.service';

describe('Service687Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service687Service]
    });
  });

  it('should ...', inject([Service687Service], (service: Service687Service) => {
    expect(service).toBeTruthy();
  }));
});
