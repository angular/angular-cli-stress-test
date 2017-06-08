/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service843Service } from './service-843.service';

describe('Service843Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service843Service]
    });
  });

  it('should ...', inject([Service843Service], (service: Service843Service) => {
    expect(service).toBeTruthy();
  }));
});
