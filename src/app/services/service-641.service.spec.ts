/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service641Service } from './service-641.service';

describe('Service641Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service641Service]
    });
  });

  it('should ...', inject([Service641Service], (service: Service641Service) => {
    expect(service).toBeTruthy();
  }));
});
