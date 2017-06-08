/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service274Service } from './service-274.service';

describe('Service274Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service274Service]
    });
  });

  it('should ...', inject([Service274Service], (service: Service274Service) => {
    expect(service).toBeTruthy();
  }));
});
