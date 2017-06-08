/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service79Service } from './service-79.service';

describe('Service79Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service79Service]
    });
  });

  it('should ...', inject([Service79Service], (service: Service79Service) => {
    expect(service).toBeTruthy();
  }));
});
