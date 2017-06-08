/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service879Service } from './service-879.service';

describe('Service879Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service879Service]
    });
  });

  it('should ...', inject([Service879Service], (service: Service879Service) => {
    expect(service).toBeTruthy();
  }));
});
