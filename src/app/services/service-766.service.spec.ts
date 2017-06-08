/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service766Service } from './service-766.service';

describe('Service766Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service766Service]
    });
  });

  it('should ...', inject([Service766Service], (service: Service766Service) => {
    expect(service).toBeTruthy();
  }));
});
