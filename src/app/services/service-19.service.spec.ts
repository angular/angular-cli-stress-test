/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service19Service } from './service-19.service';

describe('Service19Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service19Service]
    });
  });

  it('should ...', inject([Service19Service], (service: Service19Service) => {
    expect(service).toBeTruthy();
  }));
});
