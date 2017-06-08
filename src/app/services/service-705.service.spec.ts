/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service705Service } from './service-705.service';

describe('Service705Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service705Service]
    });
  });

  it('should ...', inject([Service705Service], (service: Service705Service) => {
    expect(service).toBeTruthy();
  }));
});
