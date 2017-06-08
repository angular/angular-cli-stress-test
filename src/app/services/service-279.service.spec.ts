/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service279Service } from './service-279.service';

describe('Service279Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service279Service]
    });
  });

  it('should ...', inject([Service279Service], (service: Service279Service) => {
    expect(service).toBeTruthy();
  }));
});
