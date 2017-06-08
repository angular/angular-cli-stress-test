/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service202Service } from './service-202.service';

describe('Service202Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service202Service]
    });
  });

  it('should ...', inject([Service202Service], (service: Service202Service) => {
    expect(service).toBeTruthy();
  }));
});
