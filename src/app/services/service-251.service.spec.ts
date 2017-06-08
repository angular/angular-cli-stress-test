/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service251Service } from './service-251.service';

describe('Service251Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service251Service]
    });
  });

  it('should ...', inject([Service251Service], (service: Service251Service) => {
    expect(service).toBeTruthy();
  }));
});
