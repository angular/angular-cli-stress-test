/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service447Service } from './service-447.service';

describe('Service447Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service447Service]
    });
  });

  it('should ...', inject([Service447Service], (service: Service447Service) => {
    expect(service).toBeTruthy();
  }));
});
