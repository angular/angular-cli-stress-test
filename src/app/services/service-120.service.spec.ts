/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service120Service } from './service-120.service';

describe('Service120Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service120Service]
    });
  });

  it('should ...', inject([Service120Service], (service: Service120Service) => {
    expect(service).toBeTruthy();
  }));
});
