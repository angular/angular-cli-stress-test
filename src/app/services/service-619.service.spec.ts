/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service619Service } from './service-619.service';

describe('Service619Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service619Service]
    });
  });

  it('should ...', inject([Service619Service], (service: Service619Service) => {
    expect(service).toBeTruthy();
  }));
});
