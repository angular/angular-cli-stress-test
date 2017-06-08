/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service326Service } from './service-326.service';

describe('Service326Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service326Service]
    });
  });

  it('should ...', inject([Service326Service], (service: Service326Service) => {
    expect(service).toBeTruthy();
  }));
});
