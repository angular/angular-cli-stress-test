/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service288Service } from './service-288.service';

describe('Service288Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service288Service]
    });
  });

  it('should ...', inject([Service288Service], (service: Service288Service) => {
    expect(service).toBeTruthy();
  }));
});
