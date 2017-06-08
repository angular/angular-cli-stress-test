/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service439Service } from './service-439.service';

describe('Service439Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service439Service]
    });
  });

  it('should ...', inject([Service439Service], (service: Service439Service) => {
    expect(service).toBeTruthy();
  }));
});
