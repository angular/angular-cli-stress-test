/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service955Service } from './service-955.service';

describe('Service955Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service955Service]
    });
  });

  it('should ...', inject([Service955Service], (service: Service955Service) => {
    expect(service).toBeTruthy();
  }));
});
