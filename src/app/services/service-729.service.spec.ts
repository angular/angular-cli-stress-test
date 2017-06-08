/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service729Service } from './service-729.service';

describe('Service729Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service729Service]
    });
  });

  it('should ...', inject([Service729Service], (service: Service729Service) => {
    expect(service).toBeTruthy();
  }));
});
