/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service381Service } from './service-381.service';

describe('Service381Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service381Service]
    });
  });

  it('should ...', inject([Service381Service], (service: Service381Service) => {
    expect(service).toBeTruthy();
  }));
});
