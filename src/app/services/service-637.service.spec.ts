/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service637Service } from './service-637.service';

describe('Service637Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service637Service]
    });
  });

  it('should ...', inject([Service637Service], (service: Service637Service) => {
    expect(service).toBeTruthy();
  }));
});
